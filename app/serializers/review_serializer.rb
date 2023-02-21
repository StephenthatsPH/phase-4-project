class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :text, :rating, :user_id, :program_id
end
