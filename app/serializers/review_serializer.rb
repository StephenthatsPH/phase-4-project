class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :text, :rating, :user_id, :program_id

  belongs_to :user, dependent: :destroy
  belongs_to :program
end
