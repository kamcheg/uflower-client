import {getRawPhoneNumber} from "~/shared/lib/utils/phoneNormalizer";

export function phoneValidator(value: string): boolean {
  return getRawPhoneNumber(value).length === 11
}
