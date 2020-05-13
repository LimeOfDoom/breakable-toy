class MessageSerializer < ActiveModel::Serializer
  attributes :id, :type, :body, :subject, :sender_type, :sender_id, :conversation_id, :draft, :notification_code, :notified_object_type, :notified_object_id, :attachment, :updated_at, :created_at, :global, :expires
end
