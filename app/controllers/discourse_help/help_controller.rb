module DiscourseHelp
	class HelpController < ApplicationController

		def my_page
			render :json => { name: "Для чего нужен сайт Toxu.ru... " }
      rescue StandardError => e
        render_json_error e.message
   
		end

	end
end

