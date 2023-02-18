class CreatePrograms < ActiveRecord::Migration[7.0]
  def change
    create_table :programs do |t|
      t.string :name
      t.string :hospital
      t.string :website
      t.integer :pgy1salary
      t.string :specialty
      t.integer :program_size
      t.integer :program_age
      t.string :state
      t.string :city
      t.string :area_type

      t.timestamps
    end
  end
end
