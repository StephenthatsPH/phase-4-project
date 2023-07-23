class ProgramSerializer < ActiveModel::Serializer
  attributes :id, :name, :hospital, :website, :pgy1salary, :specialty, :program_size, :program_age, :state, :city, :area_type

  has_many :reviews, serializer: ReviewSerializer
  has_many :users, through: :reviews
    
end
