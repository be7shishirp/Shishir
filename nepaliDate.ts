// Nepali date conversion utilities and age calculation

interface NepaliAge {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function calculateNepaliAge(): NepaliAge {
  // Birth date: 2061-07-07 BS 11:17 PM
  // Converting to approximate Gregorian date: 2004-10-23 23:17
  const birthDate = new Date('2004-10-23T23:17:00');
  const now = new Date();
  
  const diffMs = now.getTime() - birthDate.getTime();
  
  // Calculate years
  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();
  
  // Adjust for negative days
  if (days < 0) {
    months--;
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
  }
  
  // Adjust for negative months
  if (months < 0) {
    years--;
    months += 12;
  }
  
  // Calculate hours, minutes, seconds
  const totalSeconds = Math.floor(diffMs / 1000);
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  
  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds
  };
}

// Update age every second
export function startAgeUpdater(callback: (age: NepaliAge) => void): () => void {
  const interval = setInterval(() => {
    callback(calculateNepaliAge());
  }, 1000);
  
  return () => clearInterval(interval);
}