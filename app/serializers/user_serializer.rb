class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :created_at, :updated_at, :first_name, :last_name, :role
  
  belongs_to :organization
end
