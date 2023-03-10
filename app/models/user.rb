class User < ApplicationRecord
    has_secure_password
    
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :phone_number, presence: true, length: { minimum: 7 }
    validates :email, presence: true, uniqueness: true, length: { minimum: 5 }
    validates_format_of :email,:with => /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
    
    has_many :reviews
    has_many :programs, through: :reviews
end