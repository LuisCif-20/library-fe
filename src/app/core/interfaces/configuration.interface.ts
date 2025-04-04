import { Optional } from "@angular/core";

export interface Configuration {
  name:             string;
  logo:             string;
  dailyRate:        number;
  lateFee:          number;
  lossFee:          number;
  maxLoans:         number;
  loanPeriodDays:   number;
  loanOverdueLimit: number;
  phone:            string;
}

export interface UpdateConfiguration extends Omit<Configuration, 'logo'> {
  imageFile:  Blob | null;
}
