export const phoneMask = '+7 ### ### ## ##'

export function getRawPhoneNumber(phoneNumber: string) {
  return phoneNumber.replace(/\D/g, '')
}

export function toPrettyPhone(digits: string) {
  if (digits.length !== 10) {
    return '';
  }

  return `+7 ${digits.slice(1, 4)} ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9)}`
}
