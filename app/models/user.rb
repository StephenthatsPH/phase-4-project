class User < ApplicationRecord
    has_many :reviews
    has_many :programs, through: :reviews
    has_secure_password

    # validates :username, presence: true, uniqueness: true
    before_save { self.email = email.downcase }
    validates :first_name, :last_name, presence: true, length: { maximum: 50 }
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    validates :email, presence: true, length: { maximum: 255 },
    format: { with: VALID_EMAIL_REGEX },
    uniqueness: { case_sensitive: false }
    
    # validates :password, presence: true, length: { minimum: 6 }

    validates :password, :presence => true,
    :confirmation => true,
    :length => {:within => 6..40},
    :on => :create

    # PASSWORD_FORMAT = /\A
    #     (?=.{8,})          # Must contain 8 or more characters
    #     (?=.*\d)           # Must contain a digit
    #     (?=.*[a-z])        # Must contain a lower case character
    #     (?=.*[A-Z])        # Must contain an upper case character
    #     (?=.*[[:^alnum:]]) # Must contain a symbol
    # /x

    # validates :password, 
    #     presence: true, 
    #     length: { :within => 6..40 }, 
    #     format: { with: PASSWORD_FORMAT }, 
    #     confirmation: true, 
    #     on: :create 
end
