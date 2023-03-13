class UserSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :email, :medyear

  has_many :reviews
  has_many :programs, through: :reviews
end
