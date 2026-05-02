/**
 * Accessibility utilities for form validation and ARIA support
 */

interface ValidationError {
  field: string;
  message: string;
}

export interface FormValidationRules {
  name?: (value: string) => string | null;
  email?: (value: string) => string | null;
  phone?: (value: string) => string | null;
  message?: (value: string) => string | null;
  [key: string]: ((value: string) => string | null) | undefined;
}

export function validateForm(
  formData: Record<string, string>,
  rules: FormValidationRules
): ValidationError[] {
  const errors: ValidationError[] = [];

  for (const [field, value] of Object.entries(formData)) {
    const rule = rules[field];
    if (rule) {
      const error = rule(value);
      if (error) {
        errors.push({ field, message: error });
      }
    }
  }

  return errors;
}

// Common validators
export const validators = {
  required: (fieldName: string) => (value: string) =>
    !value?.trim() ? `${fieldName} is required` : null,

  email: (value: string) =>
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ? 'Please enter a valid email address'
      : null,

  minLength: (min: number, fieldName: string) => (value: string) =>
    value?.length < min
      ? `${fieldName} must be at least ${min} characters`
      : null,

  maxLength: (max: number, fieldName: string) => (value: string) =>
    value?.length > max
      ? `${fieldName} must not exceed ${max} characters`
      : null,

  phone: (value: string) =>
    !/^[\d\s\-\+()]{10,}$/.test(value.replace(/\s/g, ''))
      ? 'Please enter a valid phone number'
      : null,

  url: (value: string) => {
    try {
      new URL(value);
      return null;
    } catch {
      return 'Please enter a valid URL';
    }
  },
};

// ARIA helper functions
export function getAriaErrorId(fieldName: string): string {
  return `${fieldName}-error`;
}

export function getAriaDescribedBy(fieldName: string, hasError: boolean): string | undefined {
  return hasError ? getAriaErrorId(fieldName) : undefined;
}

// Screen reader announcement helper
export function announceToScreenReader(message: string): void {
  const div = document.createElement('div');
  div.setAttribute('aria-live', 'polite');
  div.setAttribute('aria-atomic', 'true');
  div.className = 'sr-only';
  div.textContent = message;
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 1000);
}

// Keyboard navigation helpers
export function isEnterOrSpace(event: React.KeyboardEvent): boolean {
  return event.key === 'Enter' || event.key === ' ';
}

export function isEscape(event: React.KeyboardEvent): boolean {
  return event.key === 'Escape';
}
