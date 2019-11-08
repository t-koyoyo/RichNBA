class ItemController < ApplicationController

  def index

    @items_popular = Item.all.order(click: "DESC").limit(10) #人気の商品
    @items_all = Item.all.page(params[:page])                #最新の商品

  end

  # 非同期クリック処理
  def click
    @now_click = Item.find_by(siteurl:params[:url]).click + 1
    Item.find_by(siteurl:params[:url]).update(click:@now_click)
    # 今回はDB操作のみな為データは返さない
    # render json: @now_click
  end

  # 非同期スクロール商品読み込み
  def additem
    @items_all = Item.all.page(params[:page]).page(params[:url])
    render json: @items_all
  end

end
