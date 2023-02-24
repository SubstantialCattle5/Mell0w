export interface userData {
  name: string;
  password: string;
  domains: string[];
}

export interface hackData {
  name: string;
  location: string;
  is_active: string;
  url: string;
  dates: string;
  domains: string[];
  prize_amount: string;
  registrations_count: number;
  organization_name: string;
  invite_only: boolean;
}