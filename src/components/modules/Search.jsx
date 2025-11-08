import React, { useEffect, useState } from "react";
import { searchCoin } from "../../services/CryptoApis";
import { Blocks } from "react-loader-spinner";
import style from "./styles/Search.module.css";

function Search({ currency, setcurrency, setcurSymbol }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoadeing, setIsLoadeing] = useState(false);

  const currencyHandeler = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const symbol = selectedOption.getAttribute("data-symbol");
    setcurrency(e.target.value);
    setcurSymbol(symbol);
  };

  useEffect(() => {
    const controller = new AbortController();
    setCoins([]);
    if (!text) {
      setIsLoadeing(false);
      return;
    }

    const search = async () => {
      try {
        const res = await fetch(searchCoin(text), {
          signal: controller.signal,
        });
        const json = await res.json();
        if (json.coins) {
          setIsLoadeing(false);
          setCoins(json.coins);
        } else {
          alert(json.status.error_message);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          alert(error.message);
        }
      }
    };
    setIsLoadeing(true);
    search();

    return () => controller.abort();
  }, [text]);

  return (
    <div className={style.searchBox}>
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={currency} onChange={currencyHandeler}>
        <option value="usd" data-symbol="$">
          US Dollar 🇺🇸
        </option>
        <option value="aed" data-symbol="د.إ">
          UAE Dirham 🇦🇪
        </option>
        <option value="ars" data-symbol="$">
          Argentine Peso 🇦🇷
        </option>
        <option value="aud" data-symbol="Au$">
          Australian Dollar 🇦🇺
        </option>
        <option value="bdt" data-symbol="৳">
          Bangladeshi Taka 🇧🇩
        </option>
        <option value="bhd" data-symbol=".د.ب">
          Bahraini Dinar 🇧🇭
        </option>
        <option value="bmd" data-symbol="$">
          Bermudian Dollar 🇧🇲
        </option>
        <option value="brl" data-symbol="R$">
          Brazilian Real 🇧🇷
        </option>
        <option value="cad" data-symbol="$">
          Canadian Dollar 🇨🇦
        </option>
        <option value="chf" data-symbol="CHF">
          Swiss Franc 🇨🇭
        </option>
        <option value="clp" data-symbol="$">
          Chilean Peso 🇨🇱
        </option>
        <option value="cny" data-symbol="¥">
          Chinese Yuan 🇨🇳
        </option>
        <option value="czk" data-symbol="Kč">
          Czech Koruna 🇨🇿
        </option>
        <option value="dkk" data-symbol="kr">
          Danish Krone 🇩🇰
        </option>
        <option value="eur" data-symbol="€">
          Euro 🇪🇺
        </option>
        <option value="gbp" data-symbol="£">
          British Pound 🇬🇧
        </option>
        <option value="gel" data-symbol="₾">
          Georgian Lari 🇬🇪
        </option>
        <option value="hkd" data-symbol="$">
          Hong Kong Dollar 🇭🇰
        </option>
        <option value="huf" data-symbol="Ft">
          Hungarian Forint 🇭🇺
        </option>
        <option value="idr" data-symbol="Rp">
          Indonesian Rupiah 🇮🇩
        </option>
        <option value="ils" data-symbol="₪">
          Israeli Shekel 🇮🇱
        </option>
        <option value="inr" data-symbol="₹">
          Indian Rupee 🇮🇳
        </option>
        <option value="jpy" data-symbol="¥">
          Japanese Yen 🇯🇵
        </option>
        <option value="krw" data-symbol="₩">
          South Korean Won 🇰🇷
        </option>
        <option value="kwd" data-symbol="د.ك">
          Kuwaiti Dinar 🇰🇼
        </option>
        <option value="lkr" data-symbol="Rs">
          Sri Lankan Rupee 🇱🇰
        </option>
        <option value="mmk" data-symbol="Ks">
          Myanmar Kyat 🇲🇲
        </option>
        <option value="mxn" data-symbol="$">
          Mexican Peso 🇲🇽
        </option>
        <option value="myr" data-symbol="RM">
          Malaysian Ringgit 🇲🇾
        </option>
        <option value="ngn" data-symbol="₦">
          Nigerian Naira 🇳🇬
        </option>
        <option value="nok" data-symbol="kr">
          Norwegian Krone 🇳🇴
        </option>
        <option value="nzd" data-symbol="$">
          New Zealand Dollar 🇳🇿
        </option>
        <option value="php" data-symbol="₱">
          Philippine Peso 🇵🇭
        </option>
        <option value="pkr" data-symbol="₨">
          Pakistani Rupee 🇵🇰
        </option>
        <option value="pln" data-symbol="zł">
          Polish Zloty 🇵🇱
        </option>
        <option value="rub" data-symbol="₽">
          Russian Ruble 🇷🇺
        </option>
        <option value="sar" data-symbol="﷼">
          Saudi Riyal 🇸🇦
        </option>
        <option value="sek" data-symbol="kr">
          Swedish Krona 🇸🇪
        </option>
        <option value="sgd" data-symbol="$">
          Singapore Dollar 🇸🇬
        </option>
        <option value="thb" data-symbol="฿">
          Thai Baht 🇹🇭
        </option>
        <option value="try" data-symbol="₺">
          Turkish Lira 🇹🇷
        </option>
        <option value="twd" data-symbol="NT$">
          New Taiwan Dollar 🇹🇼
        </option>
        <option value="uah" data-symbol="₴">
          Ukrainian Hryvnia 🇺🇦
        </option>
        <option value="vef" data-symbol="Bs">
          Venezuelan Bolívar 🇻🇪
        </option>
        <option value="vnd" data-symbol="₫">
          Vietnamese Dong 🇻🇳
        </option>
        <option value="zar" data-symbol="R">
          South African Rand 🇿🇦
        </option>
      </select>

      {(!!coins.length || isLoadeing) && (
        <div className={style.searchresult}>
          {isLoadeing && (
            <Blocks
              height="50"
              width="50"
              color="#3874ff"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              visible={true}
            />
          )}
          <ul>
            {coins.map((coin) => (
              <li key={coin.id}>
                <img src={coin.thumb} alt={coin.name} />
                <p>{coin.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
