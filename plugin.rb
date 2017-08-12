# name: Toxu
# about: add a detals site
# version: 0.1
# authors:  Evg
# url: https://github.com/Toxu-ru/Toxu

register_asset "stylesheets/sidebar.scss"

after_initialize do

  require 'listable_topic_serializer'
  class ::ListableTopicSerializer

    def excerpt
      accepted_id = object.custom_fields["accepted_answer_post_id"].to_i
      if accepted_id > 0
        cooked = Post.where(id: accepted_id).pluck('cooked')
        PrettyText.excerpt(cooked[0], 150, {})
      else
        object.excerpt
      end
    end

    def include_excerpt?
      true
    end
  end
end
