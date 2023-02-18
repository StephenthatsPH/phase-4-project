class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :post, :rating, :user_id, :program_id
end
