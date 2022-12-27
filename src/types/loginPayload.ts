interface PayloadAttribute {
  value: string
}

export interface LoginPayload {
  email: PayloadAttribute,
  password: PayloadAttribute
}
