from mkdocs.plugins import BasePlugin
from flask import Flask, request, abort

class AuthPlugin(BasePlugin):
    def on_serve(self, server, config, **kwargs):
        app = Flask(__name__)

        @app.before_request
        def authenticate():
            auth = request.authorization
            if not auth or auth.username != 'admin' or auth.password != 'password':
                return abort(401, description="Unauthorized")

        server.wsgi_app = app.wsgi_app
        return server

