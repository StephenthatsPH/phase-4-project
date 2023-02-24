class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone_number

  has_many :reviews
  has_many :programs, through: :reviews
end
