module DiscourseFeatures
	class FeaturesController < ApplicationController

		def my_page
			
			
SiteSetting.site_description = "Возможности сайта Toxu. Разделы, теги, закладки, wiki сообщения, история правок..."
			
			render :json => { name: "Возможности сайта Toxu.ru " }
      rescue StandardError => e
        render_json_error e.message
   
		end

	end
end


