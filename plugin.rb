# name: Toxu
# about: add a detals site and dev, stats
# version: 0.6
# authors:  Evg
# url: https://github.com/Toxu-ru/Toxu

register_asset "stylesheets/sidebar.scss"

enabled_site_setting :userbar_enabled

Discourse::Application.routes.append do
  get '/dev' => 'discourse_dev/dev#my_page'
  get '/toxu' => 'discourse_toxu/toxu#my_page'
  get '/features' => 'discourse_features/features#my_page'
  get '/help' => 'discourse_help/help#my_page'
  get '/stats' => 'discourse_stats/stats#my_page'
  get '/chess' => 'discourse_chess/chess#my_page'
end

load File.expand_path('../lib/dev/engine.rb', __FILE__)

DiscoursePluginRegistry.serialized_current_user_fields << "see_userbar"
DiscoursePluginRegistry.serialized_current_user_fields << "userbar_cat"
DiscoursePluginRegistry.serialized_current_user_fields << "userbar_profile"


after_initialize do

User.register_custom_field_type('see_userbar', :boolean)
User.register_custom_field_type('userbar_cat', :boolean)
User.register_custom_field_type('userbar_profile', :boolean)  
  
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

::ActionMailer::Base.prepend_view_path File.expand_path("../custom_views", __FILE__)
register_asset "javascripts/discourse/templates/connectors/user-custom-preferences/userbar-preferences.hbs"
