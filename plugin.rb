# name: Toxu
# about: add a detals site and dev, stats
# version: 0.6
# authors:  Evg
# url: https://github.com/Toxu-ru/Toxu

register_asset "stylesheets/sidebar.scss"

Discourse::Application.routes.append do
  get '/dev' => 'discourse_dev/dev#my_page'
  get '/toxu' => 'discourse_toxu/toxu#my_page'
  get '/features' => 'discourse_features/features#my_page'
  get '/help' => 'discourse_help/help#my_page'
  get '/stats' => 'discourse_stats/stats#my_page'
  get '/chess' => 'discourse_chess/chess#my_page'
end

load File.expand_path('../lib/dev/engine.rb', __FILE__)

after_initialize do

  require 'listable_topic_serializer'
  class ::ListableTopicSerializer

    def excerpt_toxu
      accepted_id = object.custom_fields["accepted_answer_post_id"].to_i
      if accepted_id > 0
        cooked = Post.where(id: accepted_id).pluck('cooked')
        PrettyText.excerpt_toxu(cooked[0], 100, {})
      else
        object.excerpt_toxu
      end
    end

    def include_excerpt?
      true
    end
  end
end
