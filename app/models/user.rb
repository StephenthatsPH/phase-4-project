class User < ApplicationRecord
    has_secure_password
    
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :medyear, presence: true, length: {in: 1..4, message: "Are you MD 1, 2, 3, or 4?"}
    validates :email, presence: true, uniqueness: true, length: { minimum: 5 }
    validates_format_of :email,:with => /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/

    has_many :reviews
    has_many :programs, through: :reviews
end