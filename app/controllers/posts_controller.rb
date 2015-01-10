class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
  end

  def create
    last_modified = {last_modified: Time.now.to_s}
    post = Post.create(post_params.merge(last_modified))
    redirect_to posts_path
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    last_modified = { last_modified: Time.now.to_s }
    if @post.update(post_params.merge(last_modified))
      redirect_to post_path(@post)
    else
      render :edit
    end
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy

    redirect_to posts_path
  end

  private

  def post_params
    params.require(:post).permit(:body, :title, :last_modified)
  end
end
