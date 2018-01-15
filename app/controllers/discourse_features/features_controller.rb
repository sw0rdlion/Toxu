module DiscourseFeatures
	class FeaturesController < ApplicationController

		def my_page
			
			

			
			render :json => { name: "Возможности сайта Toxu.ru " }
      rescue StandardError => e
        render_json_error e.message
   
		end

	end
end


