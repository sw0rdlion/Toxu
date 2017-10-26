# name: Toxu
# about: add a detals site and dev
# version: 0.3
# authors:  Evg
# url: https://github.com/Toxu-ru/Toxu

register_asset "stylesheets/sidebar.scss"

Discourse::Application.routes.append do
  get '/dev' => 'discourse_dev/dev#my_page'
  get '/hots' => 'discourse_hots/hots#my_page'
  get '/toxu' => 'discourse_toxu/toxu#my_page'
end

load File.expand_path('../lib/dev/engine.rb', __FILE__)

after_initialize do

  require 'listable_topic_serializer'
  class ::ListableTopicSerializer

    def excerpt
      accepted_id = object.custom_fields["accepted_answer_post_id"].to_i
      if accepted_id > 0
        cooked = Post.where(id: accepted_id).pluck('cooked')
        PrettyText.excerpt(cooked[0], 100, {})
      else
        object.excerpt
      end
    end

    def include_excerpt?
      true
    end
  end
end
