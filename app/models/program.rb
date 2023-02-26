class Program < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews
    
    validates :name, presence: true, uniqueness: true
    validates :hospital, presence: true
    validates :specialty, presence: true
    validates :state, length: {maximum: 2}
    validates :area_type, presence: { message: 'Is the program in a urban, suburban, or rural area?' }

end
