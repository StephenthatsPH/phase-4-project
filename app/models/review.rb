class Review < ApplicationRecord
    belongs_to :user
    belongs_to :program
    
    validates :rating, presence: true, length: {in: 1..5, message: "scale is between 1 through 5"}
    validates :text, presence: true, length: { minimum: 20 }
end
