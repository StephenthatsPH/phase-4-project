class Program < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews
    
    validates :name, presence: true, uniqueness: true
    validates :hospital, presence: true
    validates :website, presence: true
    validates :pgy1salary, presence: true
    validates :program_age, presence: true
    validates :program_size, presence: true
    validates :specialty, presence: true
    validates :state, presence: true, length: {maximum: 2}
    validates :area_type, presence: { message: ': Is the program in a urban, suburban, or rural area?' }
end
