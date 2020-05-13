class OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :city, :state, :created_at, :updated_at

  has_many :users
end
