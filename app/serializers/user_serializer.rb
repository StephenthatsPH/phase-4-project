class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :medyear

  has_many :reviews
  has_many :programs, through: :reviews
end
