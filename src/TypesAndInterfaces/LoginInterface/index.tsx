export interface LoginInterface {
    status?: boolean
    message?: string
    user?: User
    is_mobile_verified?: boolean
    is_email_verified?: boolean
    profile_image_url?: string
    professional_id?: number
    is_profile_verified?: boolean
    countries?: Country[]
    applicantTypes?: ApplicantType[]
    genders?: Gender[]
    accessToken?: string
    token_type?: string
    is_profilecompleted?: boolean
  }
  
  export interface User {
    id: number
    name: string
    last_name: string
    email: string
    phone: string
    email_verified_at: string
  }
  
  export interface Country {
    id: number
    name: string
    code: string
    currency: string
    phone_code: string
  }
  
  export interface ApplicantType {
    id: number
    name: string
  }
  
  export interface Gender {
    id: number
    name: string
  }
  