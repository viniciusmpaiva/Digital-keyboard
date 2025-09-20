import React, { useState } from 'react';
import { isEmail } from 'validator';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import Button from '../Button';

import { FormContainer, FormTitle, InputContainer } from './styled';

export default function AuthForm({
  title,
  fields,
  onSubmit,
  buttonText,
  buttonColor = '#708090',
  buttonWidth = '20%',
  buttonHeight = '10%',
  validationRules = {},
}) {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {})
  );

  const [errors, setErrors] = useState({});

  const handleInputChange = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    // Clear error when user starts typing
    if (errors[fieldName]) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    fields.forEach((field) => {
      const value = formData[field.name];
      const rules = validationRules[field.name] || [];

      // Check if field is required
      if (field.required && !value.trim()) {
        newErrors[field.name] = `${field.label} is required`;
        return;
      }

      // Apply custom validation rules
      rules.forEach((rule) => {
        if (typeof rule === 'function') {
          const error = rule(value);
          if (error) {
            newErrors[field.name] = error;
          }
        }
      });

      // Built-in email validation
      if (field.type === 'email' && value && !isEmail(value)) {
        newErrors[field.name] = 'Please enter a valid email address';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await onSubmit(formData);
    } catch (error) {
      const message = get(error, 'response.data.message', 'An error occurred');
      toast.error(message);
    }
  };

  return (
    <FormContainer>
      <FormTitle>{title}</FormTitle>
      {fields.map((field) => (
        <InputContainer key={field.name} hasError={!!errors[field.name]}>
          <label htmlFor={field.name}>{field.label}: </label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            required={field.required}
            autoComplete={field.autoComplete}
          />
          {errors[field.name] && (
            <span className="error-message">{errors[field.name]}</span>
          )}
        </InputContainer>
      ))}
      <Button
        empty
        color={buttonColor}
        content={buttonText}
        width={buttonWidth}
        height={buttonHeight}
        onclick={handleSubmit}
      />
    </FormContainer>
  );
}
