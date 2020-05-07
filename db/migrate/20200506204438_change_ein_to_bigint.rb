class ChangeEinToBigint < ActiveRecord::Migration[5.2]
  def up
   change_column :organizations, :ein, :bigint
 end

 def down
   change_column :organizations, :ein, :int
  end
end
