class CreateOrganizations < ActiveRecord::Migration[5.2]
  def change
    create_table :organizations do |t|
      t.string :name, null: false, uniqueness: true
      t.string :category, null: false
      t.string :city, null: false
      t.string :state, null: false


      t.timestamps null: false
    end
  end
end
