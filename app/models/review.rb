class Review < ApplicationRecord
    belongs_to :user
    belongs_to :program
    
    validates :text, presence: true, length: { minimum: 20 }
    validates :rating, presence: true, length: {in: 1..5, message: "Rating scale is between 1 through 5"}

end
