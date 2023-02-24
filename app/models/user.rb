class User < ApplicationRecord
    
    has_secure_password
    
    
    validates :email, presence: true, uniqueness: true, length: { minimum: 2 }
    
    validates :password, length: { in: 2..8 }
    
    has_many :reviews
    has_many :programs, through: :reviews
    
end
