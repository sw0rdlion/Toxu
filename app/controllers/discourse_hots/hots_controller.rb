module DiscourseHots
	class HotsController < ApplicationController

		def my_page
			render :json => { name: "Лучшие вопросы за последний месяц" }
      rescue StandardError => e
        render_json_error e.message
   
		end

	end
end
