export const phoneMask = '+7 ### ### ## ##'

export function getRawPhoneNumber(phoneNumber: string) {
  return phoneNumber.replace(/\D/g, '').slice(1)
}

export function toPrettyPhone(digits: string) {
  if (digits.length !== 10) {
    return '';
  }

  return `+7 ${digits.slice(0, 3)} ${digits.slice(3, 6)}-${digits.slice(6, 8)}-${digits.slice(8)}`
}
