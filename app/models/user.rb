class User < ApplicationRecord
    has_secure_password
    
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :phone_number, presence: true
    validates :email, presence: true, uniqueness: true, length: { minimum: 5 }
    
    has_many :reviews
    has_many :programs, through: :reviews
end