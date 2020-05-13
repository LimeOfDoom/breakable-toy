class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :subject, :created_at, :updated_at
end
