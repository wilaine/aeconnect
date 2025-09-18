// API utilities for static exported site

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://your-api-gateway.amazonaws.com';

export interface ContactFormData {
  email: string;
  name: string;
  message: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

/**
 * Submit contact form to external API
 * This replaces the local API route for static export
 */
export async function submitContactForm(data: ContactFormData): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return {
      success: true,
      data: result,
      message: 'Thank you for your message. We will get back to you soon!',
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      error: 'Something went wrong. Please try again.',
      message: 'Failed to submit form. Please try again later.',
    };
  }
}

/**
 * Newsletter subscription API call
 */
export async function subscribeNewsletter(email: string): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return {
      success: true,
      data: result,
      message: 'Successfully subscribed to newsletter!',
    };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      success: false,
      error: 'Failed to subscribe to newsletter.',
      message: 'Failed to subscribe. Please try again later.',
    };
  }
}