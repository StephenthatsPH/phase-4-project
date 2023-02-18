class Review < ApplicationRecord
    belongs_to :user, dependent: :destroy
    belongs_to :program
    
    validates :post, presence: true
    validates :rating, length: {in: 1..5, message: "Rating scale is between 1 through 5"}

end
