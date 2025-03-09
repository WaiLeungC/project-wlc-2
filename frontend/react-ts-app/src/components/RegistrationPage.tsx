import type React from "react"
import { useState } from "react"

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    let valid = true
    const newErrors = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    }

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = "Username is required"
      valid = false
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters"
      valid = false
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
      valid = false
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required"
      valid = false
    } else if (formData.password.length < 3) {
      newErrors.password = "Password must be at least 3 characters"
      valid = false
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      console.log("Form submitted:", formData)
      alert("Registration successful!")

      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      })
    }
  }

  return (
    <div>
      <h2>Create an Account</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p className='error'>{errors.username}</p>}
        </div>

        <div>
          <label htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className='error'>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className='error'>{errors.password}</p>}
        </div>

        <div>
          <label htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
        </div>

        <button type="submit">Register</button>
      </form>

      <p>Already have an account? <a href="#">Sign in</a></p>
    </div>
  )
}
