class CreateJoinTableReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :program_id
      t.text :text
      t.integer :rating

      t.timestamps
    end
  end
end
