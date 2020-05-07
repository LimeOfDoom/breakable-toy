class CreateOrganizations < ActiveRecord::Migration[5.2]
  def change
    create_table :organizations do |t|
      t.string :name, null: false
      t.string :category, null: false
      t.integer :ein

      t.timestamps null: false
    end
  end
end
