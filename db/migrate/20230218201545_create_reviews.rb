class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.text :text
      t.integer :rating
      t.belongs_to :user, index: true
      t.belongs_to :program, index: true

      t.timestamps
    end
  end
end
