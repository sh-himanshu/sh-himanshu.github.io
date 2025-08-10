import { clsx, type ClassValue } from 'clsx';
import { differenceInMonths, parse } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function computeYearsMonths(input: string, now = new Date()) {
  // parse input like "May 2022" into a Date
  const startDate = parse(input, 'MMM yyyy', new Date());
  // total months difference
  const totalMonths = differenceInMonths(now, startDate);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const decimal = months === 0 ? years.toString() : `${years}.${months}`;
  return decimal;
}
